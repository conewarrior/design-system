import { Upload, Trash2 } from 'lucide-react';
import { useState, useRef, DragEvent } from 'react';

interface ImageUploadProps {
  value?: string;
  onChange: (file: File | null) => void;
  guidanceText?: string;
}

export function ImageUpload({ value, onChange, guidanceText }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      onChange(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDelete = () => {
    onChange(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-4)',
      }}
    >
      {/* Upload Area */}
      <div style={{ flex: 1 }}>
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-2)',
            padding: 'var(--spacing-4)',
            border: isDragging
              ? '2px dashed var(--color-primary)'
              : '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: isDragging
              ? 'var(--color-bg-surface-hover)'
              : 'var(--color-background)',
            cursor: 'pointer',
            minHeight: '200px',
          }}
        >
          <Upload size={32} style={{ color: 'var(--color-muted)' }} />
          <span
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-muted)',
              textAlign: 'center',
            }}
          >
            클릭하거나 파일을 드래그하여 업로드
          </span>
          {guidanceText && (
            <span
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-muted)',
                textAlign: 'center',
              }}
            >
              {guidanceText}
            </span>
          )}
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          style={{ display: 'none' }}
        />
      </div>

      {/* Preview Area */}
      {value && (
        <div style={{ flex: 1 }}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--spacing-2)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              minHeight: '200px',
            }}
          >
            <img
              src={value}
              alt="미리보기"
              style={{
                maxWidth: '100%',
                maxHeight: '200px',
                objectFit: 'contain',
              }}
            />
            <button
              onClick={handleDelete}
              style={{
                position: 'absolute',
                top: 'var(--spacing-2)',
                right: 'var(--spacing-2)',
                padding: 'var(--spacing-1)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-background)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-destructive)';
                e.currentTarget.style.borderColor = 'var(--color-destructive)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-background)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <Trash2 size={16} style={{ color: 'var(--color-destructive)' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
