import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchListData } from '../../store/Actions/listActions';
// import {Header} from '../../Components/Header';


import './Home.css';
import '../../App.css';
import '../../Variables.css';
import Header from '../../Components/Header';
import ChatTyping from '../../assets/img/chat-typing-svgrepo-com.svg';


const Home = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const listData = useSelector(state => state);
    // console.log(listData)
    // // const error = useSelector(state => state.list.error);


    // const handleLogout = () => {
    //     // Dispatch logout action
    //     dispatch({ type: 'LOGOUT' });
    //     navigate('/login');
    // };

    // useEffect(() => {
    //     dispatch(fetchListData());
    //     console.log(listData)
    // }, [dispatch]);


    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowHeader(scrollTop > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className="frame">
            <div className="div">
                <div className="overlap">
                    <img className="chat-typing-svgrepo" src={ChatTyping} alt="Chat Typing" />
                </div>

                {showHeader && <Header/>}
                {/* <Header /> */}


            </div>
        </div>
    );
};

export default Home;