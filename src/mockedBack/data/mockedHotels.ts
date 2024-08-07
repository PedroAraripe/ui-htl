import type { IHotelCardPreview } from "@/types/IHotelComponents";

function randomIndex (max: number) { // min and max included 
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
}

export const mockedHotels: IHotelCardPreview[] = [
  {
    id: 1,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 4.96,
    isFavorite: false,
    currentOpen: false,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 1094
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 993
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 3,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: false,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 622
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
    id: 5,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 4.95,
    isFavorite: false,
    currentOpen: false,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 556
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 4.98,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: false,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 622
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
    id: 1,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 4.75,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 3213
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 4.97,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: false,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 666
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
    id: 5,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 5,
    isFavorite: false,
    currentOpen: false,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 1094
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4.93,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 4.96,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 556
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
    id: 1,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 4.96,
    isFavorite: false,
    currentOpen: false,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 1094
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 3,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: false,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 666
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
    id: 5,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 4.95,
    isFavorite: false,
    currentOpen: false,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 1094
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 3,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: false,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 666
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
    id: 1,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 4.75,
    isFavorite: false,
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 3,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: false,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 666
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
    id: 5,
    title: "Treine na Mansão X",
    location: "Curitiba - PR",
    receiver: "Jubilee",
    monthToOpen: "Junho",
    ratings: 5,
    isFavorite: false,
    currentOpen: false,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 1094
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
    location: "Curitiba - PR",
    receiver: "Joy",
    monthToOpen: "Junho",
    ratings: 4.93,
    isFavorite: false,
    currentOpen: true,
    price: {
      currency: "Real",
      symbol: "R$",
      value: 345
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 3,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 555
    },
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
    location: "Fortaleza - CE",
    receiver: "Joy",
    ratings: 2,
    isFavorite: false,
    currentOpen: true,
    monthToOpen: "Fevereiro",
    price: {
      currency: "Real",
      symbol: "R$",
      value: 622
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
].map((h, i) => {
  h.id = i + 1;
  return h
});