'use client'
import React, {useState} from 'react';
import {
    InputBaseProps,
    InputLabelProps,
    InputLabel,
    TextField,
} from "@mui/material";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    display: "swap",
    subsets: ['latin'],
    preload: false
})


export type ICFInputProps = InputBaseProps & InputLabelProps & {
    label: string,
    errorText?: string,
    customClass?: string,
    background: 'gray' | 'white' | 'linear'
    hasBorder?: boolean,
    characterLimit?: number,
    allowedType?: 'number' | 'text' | 'allAllowed',
    optional: boolean,
}

const MdInput:React.FC<ICFInputProps> = (
    {
        label,
        color,
        name,
        fullWidth = false,
        value,
        onChange,
        error,
        customClass,
        placeholder,
        background = 'gray',
        hasBorder,
        size = 'medium',
        multiline = false,
        minRows = 1,
        onBlur,
        type,
        characterLimit,
        optional = true,
        disabled,
        endAdornment
    }
) => {
    const [textLength, setTextLength] = useState(0)
    const handleChange = (e) => {
        setTextLength(e.target.value.length)

        if (onChange) {
            onChange(e)
        }
        if (textLength > characterLimit) {
            e.preventDefault()
        }
    }
    const handleKeyDown = (e) => {

        if (multiline) {
            if (textLength >= characterLimit && e.key.length === 1) {
                e.preventDefault();
            }
        }

    };
    return (
        <div className={`${fullWidth ? 'w-full' : 'w-auto'} relative`}>
            <InputLabel className={`!text-white !font-light ${montserrat.className}`} htmlFor={name}>
                <span className={`!text-light ${montserrat.className}`}>{label} <span
                    className={`!text-2xl ${montserrat.className} ${optional ? 'text-primary' : 'text-transparent'}`}>*</span></span>
            </InputLabel>
            <TextField
                name={name}
                className={`${customClass} ${fullWidth ? 'w-full' : 'w-auto'}`}
                placeholder={placeholder}
                multiline={multiline}
                minRows={minRows}
                value={value}
                size={size}
                type={type}
                autoComplete={'new-password'}
                disabled={disabled}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                error={error}
                endAdornment={endAdornment}
                slotProps={{
                    input: {
                        endAdornment: endAdornment
                    },
                }}
                onBlur={onBlur}
                helperText={<span className={'text-red-500'}>{error}</span>}
                sx={{
                    '& .MuiInputBase-root': {
                        background: background === 'gray' ? '#E5E7EE' : background === 'linear' ? 'linear-gradient(90deg, rgba(86, 23, 209, 1) 0%, rgba(42, 2, 120, 1) 50%, rgba(86, 23, 209, 1) 100%)' : '#ffffff',
                        borderRadius: '8px',
                    },
                    '& .MuiInputBase-input': {
                        background: background === 'gray' ? '#E5E7EE' : background === 'linear' ? 'linear-gradient(90deg, rgba(86, 23, 209, 1) 0%, rgba(42, 2, 120, 1) 50%, rgba(86, 23, 209, 1) 100%)' : '#ffffff',
                        color: color,
                        border: '0',
                        '&:-webkit-autofill': {
                            WebkitBoxShadow: '0 0 0 1000px transparent inset',
                            WebkitTextFillColor: color,
                            transition: 'background-color 5000s ease-in-out 0s',
                        },
                        borderRadius: '8px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: hasBorder ? '' : 'none',
                        background: 'transparent',
                        borderRadius: '8px',
                    },
                    '& .MuiInputBase-multiline': {
                        paddingLeft: 0,
                        paddingRight: 0,
                        borderRadius: '8px',
                    },
                    '& .MuiInputBase-inputMultiline': {
                        padding: 2,
                        borderRadius: '8px',
                    },
                }}
            />
            {
                multiline && (<span className={'text-sm text-gray-600 absolute right-8 bottom-8'}>{`${textLength}/${characterLimit}`}</span>)
            }
        </div>
    );
};

export default MdInput;
