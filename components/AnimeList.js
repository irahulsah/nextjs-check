import React from "react";
import Link from 'next/link';
class AnimeList extends React.Component {
 
  shortDesc = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };
  render() {
    const anime = this.props.anime.map((anime) => {
      return (
        <div key={anime.id} className='col-lg-4 col-md-6 mb-4 flex flex-row'>
          <div className='card h-100'>
            <Link  href="/anime/[id]" as={`/anime/${anime.id}`}><a >
              <img 
                className='card-img-top'
                src={anime.image}
                alt=''
              />
            </a>
            </Link>
            <div className='card-body'>
              <h4 className='card-title'>
             <a>{anime.genre}</a>
              </h4>
              <Link  href="/anime/[id]" as={`/anime/${anime.id}`}>
              <h5><a>{anime.name}</a></h5>
              </Link>
              <p className='card-text'>
                {this.shortDesc(anime.description, 50)}
              </p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>
      );
    });
    return <>{anime}</>;
  }
}

export default AnimeList;
