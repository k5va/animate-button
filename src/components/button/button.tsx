import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }: ButtonProps, ref): JSX.Element => {
    return (
      <button ref={ref} className={styles.button} {...props}>
        {children}
        <span>
          <BiRightArrowAlt />
        </span>
      </button>
    );
  }
);
