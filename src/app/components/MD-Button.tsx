'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { type ButtonProps } from "@mui/material";
import {Montserrat} from "next/font/google";


const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    display: "swap",
    subsets: ['latin'],
    preload: false
})

export interface ICFButtonProps extends ButtonProps {
    isLinearBg: boolean;
    text: string;
    linearPosition?: 'tl' | 'l' | 'r' | 'tr' | 'br';
    fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'base';
    textColor?: string;
    onClick?: () => void;
    extraPadding?: boolean;
    fullRounded?: boolean;
}

const CfButton: React.FC<ICFButtonProps> = ({
                                                isLinearBg,
                                                variant = 'contained',
                                                text,
                                                size = 'large',
                                                linearPosition = 'bl',
                                                color = 'primary',
                                                textColor = '#ffffff',
                                                fullWidth,
                                                fontSize = 'base',
                                                onClick = () => {},
                                                disabled = false,
                                                type,
                                                startIcon,
                                                extraPadding = true,
                                                className,
                                                fullRounded = false,
                                            }) => {
    return (
        <div className={`${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${fullWidth && '!w-full'} ${montserrat.className}`}>
            <Button
                sx={{
                    color: textColor,
                    backgroundColor: color,
                }}
                variant={variant}
                className={
                    `
                        ${isLinearBg ? 'linear-bg-btn' : ''} 
                        ${linearPosition} 
                        ${fullRounded ? '!rounded-full' : '!rounded-lg'} 
                        ${extraPadding ? '!px-10' : ''}
                        !normal-case
                        ${className}
                    `
                }
                size={size}
                fullWidth={fullWidth}
                startIcon={startIcon}
                onClick={onClick}
                disabled={disabled}
                type={type}
            >
                <span className={`text-${fontSize} ${montserrat.className}`}>{text}</span>
            </Button>
        </div>
    );
};

export default CfButton;
