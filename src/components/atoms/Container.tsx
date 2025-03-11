import cn from '@/lib/cn';

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <div className={cn('mx-auto max-w-6xl md:px-4', className)} {...props}>
            {children}
        </div>
    );
};

export default Container;
