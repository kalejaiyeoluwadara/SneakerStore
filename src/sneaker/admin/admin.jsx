import React,{useState} from 'react'
import Nav from "../nav/nav";
import Slider from "../slider/slider";
import Home from '../home/home';
import { motion, useAnimation,AnimatePresence } from "framer-motion";
import Modal from './modal';
import { useGlobal } from '../../context';
import Navigation from './navigation';
function Admin() {
    const control = useAnimation();
    const { items, setItems, modal, setModal, navigation, setNavi } = useGlobal();
  return (
    <div className="h-screen flex flex-col">
      <AnimatePresence>{navigation && <Navigation />}</AnimatePresence>
      {modal && <Modal items={items} setItems={setItems} />}
      <Nav />
      <div className="flex sm:mt-10 sm:flex-row flex-col">
        <Slider />
        <Home />
      </div>
    </div>
  );
}

export default Admin
