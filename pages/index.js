import React from 'react'

import SideBar from '../components/SideBar';
import Slider from '../components/Slider';
import AnimeList from '../components/AnimeList';

import {getMovie, getCatagories} from '../resourses/animeData';
class Home extends React.Component {
  static async getInitialProps(){
    const anime = await getMovie();
    const catagories = await getCatagories();
    const images = anime.map( a =>({
       id:'image-' + `${a.id}`,
        url:a.cover,
      name: a.name}));
    return {
      anime,
      images,
      catagories
    }
  };

  state={
    filter: 'all'
  }
 /* constructor(props)
  {
    super(props);
    this.state ={
      anime:[]
    }
  }
  //called when comp is mounted
  async componentDidMount(){
    const anime = await getMovie();
    this.setState({anime});
  }
  componentDidMount(){
    getMovie().then(anime=>{
      this.setState({anime})
    }).catch(err=>{
      console.log(err);
    });
  }*/
  changeCategoryHandler = category =>{
    console.log(category);
      this.setState({filter: category});
  }
  filterMovieHandler = (movie)=>{
    const {filter} = this.state;
    if(filter === 'all')
    {
      return movie
    }
    return movie.filter(m=> {return(m.genre && m.genre.includes(filter))});
  }
  render(){
    const { anime, images, catagories } = this.props ;
  
  /*const [anime,SetAnime] = React.useState([]);
  //called when 2nd parameter changes
  React.useEffect(()=>{
    const fetchData = async ()=>{
      const anime = await getMovie();
      SetAnime(anime);
    }
    fetchData();
  },[]);*/
 return( 
 <div>
  <div className="container p-5">
    <div className="row">

      <div className="col-lg-3">
      
        <SideBar 
        activeCategory = {this.state.filter}
        changeCategory ={this.changeCategoryHandler}
        catagories ={catagories}/>

      </div>

      <div className="col-lg-9">
        <Slider images ={images}/>

        <div className="row">
          <AnimeList anime={ this.filterMovieHandler(anime)}/>
        </div>
      </div>
    </div>
  </div>


  </div>
)
}
}

export default Home