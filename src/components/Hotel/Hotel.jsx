import "./hotel.css";
import { GrLocation } from "react-icons/gr";
const Hotel = () => {
const imges = [
    {
        src: "https://images.unsplash.com/photo-1643996729194-682a79f4feff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80"
    },
    {
        src: "https://images.pexels.com/photos/2953878/pexels-photo-2953878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        src: "https://images.unsplash.com/photo-1561580735-627a2ac47775?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80"
    },
    {
        src: "https://images.unsplash.com/photo-1578128178799-ffbb862243c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        src: "https://www.musafir.com.bd/images/places/Sajek-Valley.jpg"
    },
    {
        src: "https://i.pinimg.com/564x/c4/53/13/c453130f4d37b3babf7c5bb4c33a7406.jpg"
    },
]

  return (
    <div className="hotelContainer">
      <div className="hotelWrapper">
      <div className="hotelImages">
            {
                imges.map(img=>(
                    <div className="hotelImageWrapper">
                        <img src={img.src} alt="" className="hotelImage" />
                    </div>
                ))
            }
        </div>
        
            <h1 className="hotelTitle">Meghpunji</h1>
        <div className="hotelAdress">
          <GrLocation className="locationIcon" />
          <span>sajek valley</span>
        </div>
        <span className="hotelDistance">
          Excellent location – 400m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over 2000 at this property and get a free
        car service
        </span>
        
        
       
       
        <div className="hotelDetails">
            <div className="hotelDetailsTexts">
                <div className="hotelTitle">sajek Valley</div>
                <div className="hotelDesc">
                    <p>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quam repellat illum totam dolorem reprehenderit distinctio quibusdam, ducimus cupiditate quos unde doloremque, recusandae sit corrupti numquam, neque nisi obcaecati enim deleniti. Praesentium nisi nam, sint, rerum consequatur sed commodi officiis nostrum impedit, explicabo beatae tempore neque animi modi adipisci distinctio.
                    </p>
                </div>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a 5-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>bdt 2000</b> (5 nights)
                </h2>
                <button className="btn">
                    <a href="#">Reserve or Book Now!</a>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
