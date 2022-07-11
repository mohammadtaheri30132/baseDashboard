import React from 'react';

const Spinner  = ({color = '#ec7829', size = '40px'}) => {
    return (
        <>
            <svg className="rainbow-spin" width={size} height={size} viewBox="0 0 64 64"
                 xmlns="http://www.w3.org/2000/svg">
                <style
                    dangerouslySetInnerHTML={{__html: "\n    svg.rainbow-spin path{\n      transform-origin: 32px 32px;\n      animation: spin 2.0s cubic-bezier(.175, .885, .32, 1.275) infinite;\n    }\n\n    svg.rainbow-spin .rainbow-1{\n      animation-delay: -50ms;\n    }\n    svg.rainbow-spin .rainbow-2{\n      animation-delay: -100ms;\n    }\n    svg.rainbow-spin .rainbow-3{\n      animation-delay: -150ms;\n    }\n    svg.rainbow-spin .rainbow-4{\n      animation-delay: -200ms;\n    }\n    svg.rainbow-spin .rainbow-5{\n      animation-delay: -250ms;\n    }\n\n    \n    @keyframes spin {\n      0%, 15% {\n        transform: rotate(0);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  "}}/>
                <path className="rainbow-1" fill="none" d="M 2,32 a28,28 180 0 1 60,0" stroke={color} strokeWidth={4}/>
                <path className="rainbow-2" fill="none" d="M 8,32 a22,22 180 0 1 48,0" stroke={color} strokeWidth={4}/>
                <path className="rainbow-3" fill="none" d="M14,32 a16,16 180 0 1 36,0" stroke={color} strokeWidth={4}/>
                <path className="rainbow-4" fill="none" d="M20,32 a10,10 180 0 1 24,0" stroke={color} strokeWidth={4}/>
                <path className="rainbow-5" fill="none" d="M26,32 a 4, 4 180 0 1 12,0" stroke={color} strokeWidth={4}/>
            </svg>


        </>
    );
};

export default Spiner;
