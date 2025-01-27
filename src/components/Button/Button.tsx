import React from "react";

interface Props {
    memButton: () => void;
}
const Button: React.FC<Props> = React.memo(({ memButton }) => {
    console.log('active')
    return (
        <button onClick={memButton}>запросить шутку</button>
    )
})

export default Button;