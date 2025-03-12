/**
 * 錯誤信息組件
 *
 * 用於顯示友好的錯誤信息
 * 支持主要錯誤信息和詳細說明
 */
interface ErrorMessageProps {
    title: string;
    description?: string;
    className?: string;
}

const ErrorMessage = ({ title, description, className = '' }: ErrorMessageProps) => {
    return (
        <div className={`text-center py-8 ${className}`}>
            <p className="text-lg text-gray-600 mb-4">{title}</p>
            {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
    );
};

export default ErrorMessage;
