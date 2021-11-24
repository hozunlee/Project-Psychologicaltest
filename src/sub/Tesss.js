
import React, {useState} from 'react';
import ReactPaginate from 'react-paginate'
import styled from "styled-components";

const Tesss = ({getData}) => {
    const [pageNumber, setPageNumber] = useState(0)

    const Testbox = styled.div`
    background-color: ${props => props.color || "palevioletred"};
        width: 50%;
        height: 50%;
        border-radius: 3px;
        border : 3px;
        display: block;
        margin : auto;
    `;

    const DatasPerPage = 5
    const pageVisited = pageNumber * DatasPerPage


    const displayData = getData
        .slice(pageVisited, pageVisited + DatasPerPage)
        .map((item) => {
            return (
                <div className='testSheet'>
                    <h6 key={item.qitemNo}> Q{item.qitemNo}. {item.question}</h6>
                    <form>
                        <input type="radio" name="answer" value="answer"></input>
                        <label for="answer">{item.answer01}</label>
                        <p>{item.answer03}</p>
                        <input type="radio" name="answer" value="answer"></input>
                        <label for="answer">{item.answer02}</label>
                        <p>{item.answer04}</p>
                    </form>
                </div>
            )
        });

    const pageCount = Math.ceil(getData.length / DatasPerPage); //ceil는 반올림

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return (
        <div>
            {displayData} 
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                theme="square-fill"
            />
        
        </div>
    );
};

export default Tesss;