import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { className } from './className';

import styled from 'styled-components';

const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 50%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: green;
`



const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else{
          setVisible(false)
        }
      };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=> {
      window.addEventListener('scroll', toggleVisible);

      return () => {
        window.removeEventListener('scroll', toggleVisible)
      }
    }, [])
    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
        </Button>
    )
}

export default ScrollToTop
