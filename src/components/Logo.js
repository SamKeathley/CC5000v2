import React from 'react';

function D20() {
    return (
        <div>
            <svg width="175" height="200" viewBox="0 0 175 200">
                <polygon points="31,65 87,165 87,200 87,165 143,65 31,65" 
                    fill="none" stroke="#33313b"/>
                <polygon points="87,0 175,50 143,65 31,65 0,50 87,0" 
                    fill="none" stroke="#33313b"/>
                <polygon points="87,0 143,65 174,150 87,165 0,150 31,65 87,0" 
                    fill="none" stroke="#33313b"/>
                <polygon points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"
                    fill="none" stroke="#33313b" />
            </svg>
        </div>
    );
}
export default D20;