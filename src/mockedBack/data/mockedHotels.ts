import type { IHotelCardPreview } from "@/features/hotels-list/types/HotelCard";

function randomIndex (max: number) { // min and max included 
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
}

export const mockedHotelsBase: IHotelCardPreview[] = [
  {
    id: 1,
    title: "Treine na Mansão X",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 206
    },
    previews: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
        id: 3
      },
    ]
  },
  {
    id: 2,
    title: "Venha se aventurar no divertida mente 2",
    receiver: "Joy",
    monthToOpen: "Junho",
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 903
    },
    previews: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
        id: 3
      },
    ]
  },
  {
    id: 3,
    title: "Venha se aventurar no divertida mente 2",
    receiver: "Joy",
    currentOpen: false,
    monthToOpen: "Fevereiro",
    previews: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 3
      },
    ]
  },
  {
    id: 4,
    title: "Venha se aventurar no divertida mente 2",
    receiver: "Joy",
    currentOpen: false,
    monthToOpen: "Fevereiro",
    previews: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq",
        id: 1
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq",
        id: 2
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720&im_q=highq",
        id: 3
      },
    ]
  },
];

export const mockedHotels: IHotelCardPreview[] = [];

for(let i = 0; i < 16; i++) {
  const hotelIndex = randomIndex(mockedHotelsBase.length - 1);
  const hotel = {... mockedHotelsBase[hotelIndex]};
  hotel.id = i + 1;

  mockedHotels.push(hotel);
};