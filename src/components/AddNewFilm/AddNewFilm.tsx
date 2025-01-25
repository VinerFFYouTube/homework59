import React, { useEffect, useState } from "react";

interface Props {
    name: string;
    setNewFilm: (setFilm: string) => void;
}

const AddNewFilm: React.FC<Props> = React.memo(({ name, setNewFilm }) => {

    return (
        <>
            <input type="text" value={name} onChange={(e) => setNewFilm(e.target.value)} />
            <button className='m-3' type='submit'>add</button>
        </>
    )
})

export default AddNewFilm