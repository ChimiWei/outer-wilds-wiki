import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    min-height: 625px;
    animation: fadeIn 3s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    &.fade-out {
        animation: fadeOut 1s;
        
        @keyframes fadeOut {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    

    }

`