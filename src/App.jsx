import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./sass/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__hero">
        <Hero
          title={"iPhone 16 Pro"}
          title__size={"60px"}
          desc={"Hello, Apple Intelligence"}
          desc__size="32px"
          btn_title="Learn More"
          btn_title_two="Buy"
          btn_bg="dodgerblue"
          btn_cl="white"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage="https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg"
        />
        <Hero
          title={"iPhone 16"}
          title__size={"60px"}
          desc={"Hello, Apple Intelligence"}
          desc__size="32px"
          btn_title="Learn More"
          btn_title_two="Buy"
          btn_bg="white"
          btn_cl="black"
          hover_btn_bg="#f0f0f0"
          hover_btn_cl="black"
          btn_border_cl="white"
          bgImage="https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_large.jpg"
        />
        <Hero
          title={"iPad air"}
          title__size={"60px"}
          desc={"Two sizes. Faster chip. Does it all."}
          desc__size="32px"
          btn_title="Learn More"
          btn_title_two="Buy"
          btn_bg="dodgerblue"
          btn_cl="white"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage="https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_largetall.jpg"
          bottom_title="Hello, Apple intelligence"
        />
        <Hero
          title={"AirPods4"}
          title__size={"40px"}
          desc={
            "Iconic. Now supersonic. Available with Active Noise Cacellation."
          }
          desc__size="32px"
          btn_title="Learn More"
          btn_title_two="Buy"
          btn_bg="dodgerblue"
          btn_cl="white"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage="https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg"
          bottom="300px"
        />
        <Hero
          title={"Watch"}
          title__size={"40px"}
          desc={"Series 10. Thinstant classic"}
          desc__size="32px"
          btn_title="Learn More"
          title_color="black"
          btn_title_two="Buy"
          btn_bg="dodgerblue"
          btn_cl="black"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage={
            "https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg"
          }
        />
        <Hero
          title={"MackBook Air"}
          title__size={"40px"}
          desc={"Lean. Mean. M3 machine"}
          desc__size="32px"
          btn_title="Learn More"
          title_color="black"
          btn_title_two="Buy"
          btn_bg="dodgerblue"
          btn_cl="black"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage={
            "https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large.jpg"
          }
        />
        <Hero
          title={"Apple for Small Business"}
          title__size={"40px"}
          desc={"Hardware, software, and expert help- all in one place"}
          desc__size="28px"
          btn_title="Learn More"
          btn_count={true}
          title_color="black"
          btn_title_two="Learn more"
          btn_bg="dodgerblue"
          btn_cl="black"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage={
            "https://www.apple.com/v/home/bv/images/promos/apple-small-business/promo_asb__gajxkvbkiqie_large.png"
          }
        />
        <Hero
          title={"Carrier deals at Apple"}
          title__size={"40px"}
          desc={
            "Get up to $1000 in credit on a new iPhone Trade-in may be required."
          }
          desc__size="25px"
          btn_title="Learn More"
          btn_count={true}
          title_color="black"
          btn_title_two="Find your deal"
          btn_bg="dodgerblue"
          btn_cl="black"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bottom="45px"
          bgImage={
            "https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_large.jpg"
          }
        />
        <Hero
          title={"Trade in "}
          title__size={"40px"}
          desc={
            "Get $180-$650 in credit when you trade in iPhone 12 or higher."
          }
          desc__size="25px"
          btn_title="Learn More"
          btn_count={true}
          title_color="black"
          btn_title_two="Get your estimate"
          btn_bg="dodgerblue"
          btn_cl="black"
          hover_btn_bg="#0071E3"
          hover_btn_cl="white"
          btn_border_cl="dodgerblue"
          bgImage={
            "https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg         "
          }
        />
      </div>
    </div>
  );
}

export default App;
