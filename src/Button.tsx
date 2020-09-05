import React, {CSSProperties, MouseEventHandler} from 'react';

interface Props {
    text: string;
    onClick: MouseEventHandler;
}

export default function Button({ text, onClick,  }: Props) {
    return (
        <button style={styles.button} onClick={onClick}>
            {text}
        </button>
    );
}

const styles: { [name: string]: CSSProperties } = {
    button: {  },
};
