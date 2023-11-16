'use client'

import styled from 'styled-components'

export const GridProducts = styled.header`
    width: 100%;
    height: 90vh;
    gap: 22px;
    justify-content: center;
    align-items: center;
    display: flex;
    `


export const ItemCard = styled.header`
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    flex-wrap: wrap;
  
          
`



export const ProductItem = styled.header`
    margin:18px;
    width: 240px;
    height: 285px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    display: flex;
    justify-content: space-between;

    > div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }

    div > img {
        padding-top: 5px;
        display: flex;
        justify-content: center;
    align-items: center;
      width: 140px;
    }
    > div > div > div {
        padding: 0px 14px;
        display: flex;
        justify-content: space-between;
    }
    > div > div > div > h2 {
        font-size: 15px;
        font-weight: 400;
        white-space: wrap;
        padding-right: 10px;
        
    }
    > div > div > div > p {
        white-space: nowrap;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #373737;
        color:white;
        font-weight: 700;
        padding: 4px 7px;
        border-radius: 5px;
    }
    > div > div > p {
        padding: 0px 14px 0px 10px;
        padding-top:7px;
        padding-bottom:7px;
        font-size: 10px;
    }
    > div > button{
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        outline: none;
        color: white;
        border:none;
        width: 100%;
        height: 37px;
        border-radius: 0px 0px 8px 8px;
        background: #0F52BA;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:8px;

    }
}
`





