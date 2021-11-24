
import React from 'react';

const Tesss = ({getData}) => {
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
