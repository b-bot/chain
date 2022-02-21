import React from 'react';
import { styled, CSS, VariantProps, keyframes } from '../../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'button';

const pulsing = keyframes({
  '100%': { boxShadow: '0 0 0 20px rgba(255, 255, 255, 0)' },
});

const loading = keyframes({
  '0%': { backgroundPosition: '200% 0' },
  '100%': { backgroundPosition: '-200% 0' },
});

const StyledButton = styled(DEFAULT_TAG, {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  px: '$2',
  fontFamily: '$heading',
  fontSize: '$2',
  fontWeight: '700',
  fontVariantNumeric: 'tabular-nums',
  transition: 'all 0.2s ease-in-out',
  letterSpacing: '1px',
  minWidth: '72px',
  minHeight: '40px',

  '&:disabled': {
    backgroundColor: '$neutwo',
    color: '$text',
    boxShadow: 'inset 5px 5px 10px $colors$neu, inset -5px -5px 10px $colors$neu',
    '@hover': {
      '&:hover': {
        border: '2px solid $colors$neutwo',
        pointerEvents: 'not-allowed',
        animation: 'swing 1s ease',
        'animation-iteration-count': 1,
      },
    },
  },

  variants: {
    size: {
      small: {
        height: '$5',
        px: '$2',
        fontSize: '$3',
        lineHeight: '$sizes$5',
      },
      medium: {
        height: '$6',
        px: '$3',
        fontSize: '$4',
        lineHeight: '$sizes$6',
      },
      large: {
        height: '$7',
        px: '$4',
        fontSize: '$5',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      neu: {
        backgroundColor: '$bg',
        boxShadow: '5px 5px 10px $colors$neu, -5px -5px 10px $colors$neutwo',
        color: '$text',
        border: '2px solid transparent',
        borderRadius: '$pill',
        '@hover': {
          '&:hover': {
            color: '$primary',
            cursor: 'pointer',
            boxShadow: '2px 2px 5px $colors$neu, -2px -2px 5px $colors$neutwo',
          },
        },
        '&:active': {
          boxShadow: 'inset 5px 5px 10px $colors$neu, inset -5px -5px 10px $colors$neutwo',
        },
        '&:focus': {
          color: '$primary',
          border: '2px dashed $colors$primary',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slate300',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
      },
      contrast: {
        backgroundColor: '$text',
        border: '2px solid $colors$text',
        color: '$bg',
        borderRadius: '$pill',
        '@hover': {
          '&:hover': {
            cursor: 'pointer',
            border: '2px solid $colors$primary',
          },
        },
        '&:active': {
          border: '2px solid $colors$primary',
        },
        '&:focus': {
          border: '2px dashed $colors$primary',
        },
      },
      purple: {
        backgroundColor: '$colors$primary',
        border: '2px solid transparent',
        color: 'white',
        borderRadius: '$pill',
        '@hover': {
          '&:hover': {
            border: '2px solid white',
            cursor: 'pointer',
          },
        },
        '&:active': {
          border: '2px solid white',
        },
        '&:focus': {
          outline: 'none',
          border: '2px dotted white',
        },
      },
      pink: {
        backgroundColor: '$link',
        color: 'white',
        border: '2px solid transparent',
        borderRadius: '$pill',
        '@hover': {
          '&:hover': {
            border: '2px solid white',
            cursor: 'pointer',
          },
        },
        '&:active': {
          border: '2px solid white',
        },
        '&:focus': {
          outline: 'none',
          border: '2px dotted white',
        },
      },
      blue: {
        backgroundColor: '$secondary',
        color: 'white',
        border: '2px solid transparent',
        borderRadius: '$pill',
        '@hover': {
          '&:hover': {
            border: '2px solid white',
            cursor: 'pointer',
          },
        },
        '&:active': {
          border: '2px solid white',
        },
        '&:focus': {
          outline: 'none',
          border: '2px dotted white',
        },
      },
      quiet: {
        backgroundColor: '$bg',
        color: '$text',
        fontWeight: '300',
        fontFamily: '$body',
        margin: '0',
        padding: '0',
        '@hover': {
          '&:hover': {
            color: '$link',
            bg: '$bg',
            cursor: 'pointer',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
      avatar: {
        color: '$text',
        bg: '$background',
        margin: '0',
        padding: '0',
        '@hover': {
          '&:hover': {
            color: '$link',
            bg: '$bg',
            cursor: 'pointer',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
        color: '$slate900',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate400',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
      },
      waiting: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate400',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700',
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'red',
        boxShadow: 'none',
      },
    },
    pulsing: {
      true: {
        boxShadow: '0 0 0 0 rgba(110, 86, 207, 0.3)',
        animation: `${pulsing} 1.5s infinite cubic-bezier(0.66, 0, 0, 1)`,
      },
    },
    fill: {
      true: {
        overflow: 'hidden',
        position: 'relative',
        span: {
          color: '$text',
          position: 'relative',
          transition: 'color 0.6s cubic-bezier(0.53, 0.21, 0, 1)',
        },

        '&:before': {
          content: '',
          position: 'absolute',
          top: '50%',
          left: '-1px',
          borderRadius: '6px',
          transform: 'translate(-100%, -50%)',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(110, 86, 207, 0.7)',
          transition: 'transform 0.6s cubic-bezier(0.53, 0.21, 0, 1)',
        },
        '@hover': {
          '&:hover': {
            '&:before': {
              transform: 'translate(1px, -50%) scale(1.001)',
            },

            span: {
              color: 'black',
            },
          },
        },
      },
    },
    skeleton: {
      true: {
        backgroundImage:
          'linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%))',
        backgroundSize: '400% 100%',
        animation: `${loading} 8s ease-in-out infinite`,
      },
    },
    immerse: {
      true: {
        color: '$text',
        position: 'relative',
        overflow: 'hidden',
        span: {
          position: 'relative',
        },
        '&:before': {
          content: '',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          transform: 'translate3d(-50%,-50%,0) scale3d(0,0,0)',
          transition:
            'opacity .4s cubic-bezier(.19,1,.22,1),transform .75s cubic-bezier(.19,1,.22,1)',
          backgroundColor: 'rgba(110, 86, 207, 0.7)',
          opacity: 0,
        },
        '&:hover': {
          '&:before': {
            opacity: 1,
            transitionDuration: '.85s',
            transform: 'translate3d(-50%,-50%,0) scale3d(1,1,1)',
          },
          span: {
            color: 'white',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'neu',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate200',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$slate300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slate300',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'contrast',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue200',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$blue300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$blue300',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'purple',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$green200',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$green300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green700, 0 0 0 1px $colors$green700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$green300',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'blue',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$red200',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$red300',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red700, 0 0 0 1px $colors$red700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$red300',
            boxShadow: 'none',
          },
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'neu',
  },
});

type ButtonCSSProp = { css?: CSS };
type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants;

type ButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ButtonOwnProps>;

export const Button = React.forwardRef((props, forwardedRef) => {
  // @ts-ignore
  return <StyledButton {...props} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
