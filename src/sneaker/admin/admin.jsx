import React,{useState} from 'react'
import Nav from "../nav/nav";
import Slider from "../slider/slider";
import Home from '../home/home';
import { motion, useAnimation } from "framer-motion";
import Modal from './modal';
import Navigation from './navigation';
function Admin() {
    const [items,setItems] = useState(0);
    const [modal,setModal] = useState(false);
    const [navigation,setNavi] = useState(false);
    const control = useAnimation();
  return (
    <div className="h-screen flex flex-col">
      {navigation && <Navigation navigation={navigation} setNavi={setNavi} />}
      {modal && <Modal items={items} control={control} setItems={setItems} />}
      <Nav
      control={control}
        navigation={navigation}
        setNavi={setNavi}
        items={items}
        setItems={setItems}
        modal={modal}
        setModal={setModal}
      />
      <Slider />
      <Home items={items} setItems={setItems} />
    </div>
  );
}

export default Admin
