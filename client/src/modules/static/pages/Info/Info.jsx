import React from 'react';
import { Link } from 'react-router-dom';
import Question from '../../components/Question/Question';
import './Info.scss';
import { MdQuestionAnswer } from 'react-icons/md';
import { VscFilePdf } from 'react-icons/vsc';

const Info = () => {

    const faq = [
        { question: 'Sed quis nibh suscipit, euismod sem id, tempus diam?', answer: 'Mauris pellentesque arcu non viverra lobortis. Etiam mattis mauris a arcu tincidunt, eget rhoncus leo faucibus. Suspendisse posuere dolor nec tellus eleifend tempor. Cras commodo ex ac turpis viverra accumsan. Morbi quis urna nec nisl luctus rhoncus auctor sit amet arcu. Fusce a mattis orci, id convallis lacus. Nunc pellentesque blandit finibus. Aliquam vestibulum neque sit amet elementum congue. Integer id luctus dui. Aenean quis accumsan ex.' },
        { question: 'Sed quis nibh suscipit, euismod sem id, tempus diam?', answer: 'Mauris pellentesque arcu non viverra lobortis. Etiam mattis mauris a arcu tincidunt, eget rhoncus leo faucibus. Suspendisse posuere dolor nec tellus eleifend tempor. Cras commodo ex ac turpis viverra accumsan. Morbi quis urna nec nisl luctus rhoncus auctor sit amet arcu. Fusce a mattis orci, id convallis lacus. Nunc pellentesque blandit finibus. Aliquam vestibulum neque sit amet elementum congue. Integer id luctus dui. Aenean quis accumsan ex.' },
        { question: 'Sed quis nibh suscipit, euismod sem id, tempus diam?', answer: 'Mauris pellentesque arcu non viverra lobortis. Etiam mattis mauris a arcu tincidunt, eget rhoncus leo faucibus. Suspendisse posuere dolor nec tellus eleifend tempor. Cras commodo ex ac turpis viverra accumsan. Morbi quis urna nec nisl luctus rhoncus auctor sit amet arcu. Fusce a mattis orci, id convallis lacus. Nunc pellentesque blandit finibus. Aliquam vestibulum neque sit amet elementum congue. Integer id luctus dui. Aenean quis accumsan ex.' }
    ];

    const docs = [
        { name: 'Sprawności', url: '../../../../assets/docs/sprawnosci_harcerskie.pdf' },
        { name: 'Sprawności', url: '../../../../assets/docs/sprawnosci_harcerskie.pdf' }
    ];

    return (
        <section className='info-section'>
            <article className='faq'>
                <div className="faq__heading">
                    <MdQuestionAnswer className='icon' />
                    <h2>Często zadawane pytania</h2>
                </div>
                <ul className="faq__list">
                    {faq.map(q => (
                        <Question question={q.question} answer={q.answer} />
                    ))}
                </ul>
            </article>
            <article className="docs">
                <div className="docs__heading">
                    <MdQuestionAnswer className='icon' />
                    <h2>Dokumenty do pobrania</h2>
                </div>
                <ul className="docs__list">
                    {docs.map(d => (
                        <Link to={d.url} download target='_blank' className='item'>
                            <VscFilePdf className='icon' />
                            <h3>{d.name}.pdf</h3>
                        </Link>
                    ))}
                </ul>
                <p className='text'>Nie znalazłeś tego czego szukasz? <Link className='link' to='/kontakt'><span>Napisz do nas!</span></Link>  </p>
            </article>
        </section>
    )
}

export default Info;