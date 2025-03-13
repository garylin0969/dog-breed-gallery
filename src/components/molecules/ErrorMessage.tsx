interface ErrorMessageProps {
    title: string;
    description?: string;
    className?: string;
}

// 錯誤信息
const ErrorMessage = ({ title, description, className = '' }: ErrorMessageProps) => {
    return (
        <div className={`text-center py-8 ${className}`}>
            <p className="text-lg text-gray-600 mb-4">{title}</p>
            {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
    );
};

export default ErrorMessage;
