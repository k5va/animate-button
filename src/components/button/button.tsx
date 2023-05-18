import { ButtonHTMLAttributes, forwardRef } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref): JSX.Element => {
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
