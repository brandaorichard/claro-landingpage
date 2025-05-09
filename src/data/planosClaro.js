// src/data/planosClaro.js
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaPlus,
} from "react-icons/fa6";
import {
  FaTv,
  FaStar,
} from "react-icons/fa";
import netflixLogo from "../assets/netflix.svg";
import globoplayLogo from "../assets/globoplay.svg";
import maxLogo from "../assets/max.svg";
import disneyLogo from "../assets/disney.svg";
import wifiLogo from "../assets/wifi.svg";

// Planos Claro Controle
export const planos = [{
    nome: "Claro Controle",
    total: "15 GB",
    detalhes: ["Single Total: 20 GB", "+ 5GB bônus"],
    preco: "R$59,90/mês",
    beneficios: [{
        icon: FaInstagram,
        color: "#E1306C",
        label: "Instagram"
      },
      {
        icon: FaFacebook,
        color: "#1877F3",
        label: "Facebook"
      },
      {
        icon: FaXTwitter,
        color: "#000",
        label: "Twitter"
      },
      {
        icon: FaTiktok,
        color: "#000",
        label: "TikTok"
      },
      {
        icon: FaYoutube,
        color: "#FF0000",
        label: "YouTube"
      },
      {
        text: "+ 5GB"
      }
    ]
  },
  {
    nome: "Claro Controle",
    total: "20 GB",
    detalhes: ["Single Total: 25 GB", "+ 5GB bônus"],
    preco: "R$69,90/mês",
    beneficios: [{
        icon: FaInstagram,
        color: "#E1306C",
        label: "Instagram"
      },
      {
        icon: FaFacebook,
        color: "#1877F3",
        label: "Facebook"
      },
      {
        icon: FaXTwitter,
        color: "#000",
        label: "Twitter"
      },
      {
        icon: FaTiktok,
        color: "#000",
        label: "TikTok"
      },
      {
        icon: FaYoutube,
        color: "#FF0000",
        label: "YouTube"
      },
      {
        text: "+ 5GB"
      }
    ]
  },
  {
    nome: "Claro Controle",
    total: "20 GB GeForce",
    detalhes: ["Single Total: 25 GB", "+ 5GB bônus"],
    preco: "R$99,90/mês",
    beneficios: [{
        icon: FaInstagram,
        color: "#E1306C",
        label: "Instagram"
      },
      {
        icon: FaFacebook,
        color: "#1877F3",
        label: "Facebook"
      },
      {
        icon: FaXTwitter,
        color: "#000",
        label: "Twitter"
      },
      {
        icon: FaTiktok,
        color: "#000",
        label: "TikTok"
      },
      {
        icon: FaYoutube,
        color: "#FF0000",
        label: "YouTube"
      },
      {
        text: "+ 5GB"
      }
    ]
  },
];

export const planosPos = [
  {
    nome: "Pós Convergência",
    total: "50 GB",
    detalhes: ["Single Total: N/A"],
    preco: "R$59,90/mês",
    beneficios: [
      { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
      { icon: FaFacebook, color: "#1877F3", label: "Facebook" },
      { icon: FaXTwitter, color: "#000", label: "Twitter" },
      { icon: FaTiktok, color: "#000", label: "TikTok" },
      { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
      { img: globoplayLogo, label: "GloboPlay" },
      { img: netflixLogo, label: "Netflix", color: "#E50914" },
      { img: maxLogo, label: "max" },
      { img: disneyLogo, label: "disney" },
      { text: "+ 10GB" }
    ]
  },
  {
    nome: "Pós 25GB",
    total: "100 GB",
    detalhes: ["Single Total: 50 GB"],
    preco: "R$119,90/mês",
    beneficios: [
      { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
      { icon: FaFacebook, color: "#1877F3", label: "Facebook" },
      { icon: FaXTwitter, color: "#000", label: "Twitter" },
      { icon: FaTiktok, color: "#000", label: "TikTok" },
      { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
      { img: globoplayLogo, label: "GloboPlay" },
      { img: netflixLogo, label: "Netflix", color: "#E50914" },
      { img: maxLogo, label: "max" },
      { img: disneyLogo, label: "disney" },
      { text: "+ 20GB" }
    ]
  },
  {
    nome: "Pós 30GB GeForce",
    total: "120 GB",
    detalhes: ["Single Total: 60 GB"],
    preco: "R$149,90/mês",
    beneficios: [
      { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
      { icon: FaFacebook, color: "#1877F3", label: "Facebook" },
      { icon: FaXTwitter, color: "#000", label: "Twitter" },
      { icon: FaTiktok, color: "#000", label: "TikTok" },
      { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
      { img: globoplayLogo, label: "GloboPlay" },
      { img: netflixLogo, label: "Netflix", color: "#E50914" },
      { img: maxLogo, label: "max" },
      { img: disneyLogo, label: "disney" },
      { text: "+ 30GB" }
    ]
  },
  {
    nome: "Pós 50GB",
    total: "200 GB",
    detalhes: ["Single Total: 100 GB"],
    preco: "R$169,90/mês",
    beneficios: [
      { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
      { icon: FaFacebook, color: "#1877F3", label: "Facebook" },
      { icon: FaXTwitter, color: "#000", label: "Twitter" },
      { icon: FaTiktok, color: "#000", label: "TikTok" },
      { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
      { img: globoplayLogo, label: "GloboPlay" },
      { img: netflixLogo, label: "Netflix", color: "#E50914" },
      { img: maxLogo, label: "max" },
      { img: disneyLogo, label: "disney" },
      { text: "+ 50GB" }
    ]
  },
  {
    nome: "Pós 75GB",
    total: "300 GB",
    detalhes: ["Single Total: 75 GB"],
    preco: "R$219,90/mês",
    beneficios: [
      { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
      { icon: FaFacebook, color: "#1877F3", label: "Facebook" },
      { icon: FaXTwitter, color: "#000", label: "Twitter" },
      { icon: FaTiktok, color: "#000", label: "TikTok" },
      { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
      { img: globoplayLogo, label: "GloboPlay" },
      { img: netflixLogo, label: "Netflix", color: "#E50914" },
      { img: maxLogo, label: "max" },
      { img: disneyLogo, label: "disney" },
      { text: "+ 75GB" }
    ]
  },
  {
    nome: "Pós 150GB",
    total: "600 GB",
    detalhes: ["Single Total: 300 GB"],
    preco: "R$319,90/mês",
    beneficios: [
      { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
      { icon: FaFacebook, color: "#1877F3", label: "Facebook" },
      { icon: FaXTwitter, color: "#000", label: "Twitter" },
      { icon: FaTiktok, color: "#000", label: "TikTok" },
      { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
      { img: globoplayLogo, label: "GloboPlay" },
      { img: netflixLogo, label: "Netflix", color: "#E50914" },
      { img: maxLogo, label: "max" },
      { img: disneyLogo, label: "disney" },
      { text: "+ 150GB" }
    ]
  },
];

// Planos Claro Fibra+
export const planosFibra = [{
    nome: "Claro Fibra+ 350 Mega",
    total: "350 Mega",
    detalhes: [
      "Wi-Fi Plus incluso",
      "Globoplay incluso",
    ],
    preco: "R$99,90/mês",
    beneficios: [
      { img: globoplayLogo, label: "GloboPlay" },
      { img: wifiLogo, label: "wifi" },
    ]
  },
  {
    nome: "Claro Fibra+ 500 Mega",
    total: "500 Mega",
    detalhes: [
      "Wi-Fi Plus incluso",
      "Globoplay incluso",
    ],
    preco: "R$109,90/mês",
    beneficios: [
      { img: globoplayLogo, label: "GloboPlay" },
      { img: wifiLogo, label: "wifi" },
    ]
  },
  // {
  //   nome: "Claro Fibra+ 750 Mega",
  //   total: "750 Mega",
  //   detalhes: [
  //     "Wi-Fi Plus incluso",
  //     "Globoplay incluso",
  //   ],
  //   preco: "R$129,90/mês",
  //   beneficios: [
  //     { img: globoplayLogo, label: "GloboPlay" },
  //     { img: wifiLogo, label: "wifi" },
  //   ]
  // },
  // {
  //   nome: "Claro Fibra+ 1 Giga",
  //   total: "1 Giga",
  //   detalhes: [
  //     "Wi-Fi Plus incluso",
  //     "Globoplay incluso",
  //   ],
  //   preco: "R$199,90/mês",
  //   beneficios: [
  //     { img: globoplayLogo, label: "GloboPlay" },
  //     { img: wifiLogo, label: "wifi" },
  //   ]
  // },
];

// Planos Claro TV+
export const planosTv = [
  {
    nome: "Claro TV+ Box",
    total: "TV+ Box",
    detalhes: [
      "Single",
    ],
    preco: "R$119,90/mês",
    beneficios: [
      { icon: FaTv, color: "#A80000", label: "TV" },
      { icon: FaStar, color: "#FFD700", label: "Benefício" }
    ]
  },
  {
    nome: "Claro TV+ 4k",
    total: "TV+ 4k",
    detalhes: [
      "Single",
    ],
    preco: "R$149,90/mês",
    beneficios: [
      { icon: FaTv, color: "#A80000", label: "TV" },
      { icon: FaStar, color: "#FFD700", label: "Benefício" }
    ]
  },
  {
    nome: "Claro TV+ SoundBox",
    total: "TV+ SoundBox",
    detalhes: [
      "Single",
    ],
    preco: "R$159,90/mês",
    beneficios: [
      { icon: FaTv, color: "#A80000", label: "TV" },
      { icon: FaStar, color: "#FFD700", label: "Benefício" }
    ]
  }
];