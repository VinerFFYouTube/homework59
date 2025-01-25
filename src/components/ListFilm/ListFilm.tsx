import React, { useEffect } from "react";

interface Props {
    filmName: string;
    deleteFIlmFunction: () => void;
    renameFilmFunction: (nameFilm: string, index: number) => void;
    index: number;
}

const ListFilm: React.FC<Props> = React.memo(({filmName, deleteFIlmFunction, renameFilmFunction, index}) => {

    console.log("ListFilm re-rendered", filmName);

    return (
        <>
            <li>
                <input
                type="text" value={filmName}
                onChange={(e) => { renameFilmFunction(e.target.value, index) }}
                />
                <button onClick={deleteFIlmFunction}>X</button>
            </li>
        </>
    )
})

export default ListFilm;