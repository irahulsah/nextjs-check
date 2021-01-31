import React from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";
import MovieCreateForm from "./MovieCreateForm";
import { createMovie } from "../resourses/animeData";
const SideBar = (props) => {
  let modal = null;
  const router = useRouter();
  const handleSubmitForm = (movie) => {
    createMovie(movie).then((res) => {
      modal.closeModal();

      router.push("/");
    });
  };
  console.log(props.activeCategory);
  return (
    <div>
      <Modal ref={(ele) => (modal = ele)}>
        <MovieCreateForm submitFormData={handleSubmitForm} />
      </Modal>
      <h1 className='my-4'>Shop Name</h1>
      <div className='list-group'>
        {props.catagories.map((el) => (
          <a href='#' key={el.id} 
          onClick ={()=>props.changeCategory(el.title)}
          className={`list-group-item ${props.activeCategory === el.title ? 'active' : ' '}`}>
            {el.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
