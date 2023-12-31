import React, {FC, useRef} from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

interface IProps{
    onSearch:(searchText:string)=>void;
}
const SearchInput:FC<IProps> = ({onSearch}) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if (ref.current){
              onSearch(ref.current.value);
        }}}>
            <InputGroup>
            <InputLeftElement children={<BsSearch/>}/>
            <Input ref={ref} borderRadius={20} placeholder={'Search games...'} variant={'filled'}/>
        </InputGroup>
        </form>
    );
};

export {SearchInput};