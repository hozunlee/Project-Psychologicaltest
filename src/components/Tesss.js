
import React, {useState} from 'react';
import ReactPaginate from 'react-paginate'

const Tesss = ({getData}) => {
    const [pageNumber, setPageNumber] = useState(0)

    const DatasPerPage = 5
    const pageVisited = pageNumber * DatasPerPage

    const displayData = getData
        .slice(pageVisited, pageVisited + DatasPerPage)
        .map((item) => {
            return (
                <>
                    <h6 key={item.qitemNo}> Q{item.qitemNo}. {item.question}</h6>
                    <form>
                        <input type="radio" name="answer" value="answer"></input>
                        <label for="answer">{item.answer01}</label>
                        <p>{item.answer03}</p>
                        <input type="radio" name="answer" value="answer"></input>
                        <label for="answer">{item.answer02}</label>
                        <p>{item.answer04}</p>
                    </form>
                </>
            )
        });

    return (
        <div>
            <ol>
                {getData.map((item, index) => {
                    return (
                        <>
                            <h6 key={item.qitemNo}> Q{item.qitemNo}. {item.question}</h6>
                            <form>
                                <input type="radio" name="answer" value="answer"></input>
                                <label for="answer">{item.answer01}</label>
                                <p>{item.answer03}</p>
                                <input type="radio" name="answer" value="answer"></input>
                                <label for="answer">{item.answer02}</label>
                                <p>{item.answer04}</p>
                            </form>
                        </>);
                })}
            </ol>
        </div>
    );
};

export default Tesss;