import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import avatar3 from 'images/pages/summit-2023/last-year/dnsmichi.png';
import avatar2 from 'images/pages/summit-2023/last-year/pchaigno.png';
import avatar1 from 'images/pages/summit-2023/last-year/swarna.png';

import hexagonBg from './images/hexagon-background.svg';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';
import shape4 from './images/shape-4.svg';

const twitterCards = [
  {
    avatar: avatar1,
    name: 'Swarna (she/her)🏳️‍🌈',
    nick: '@skpodila',
    text: `As I watch the sessions at <marker>#eBPFSummit</marker>, (<marker>@alexei_ast</marker> and <marker>@classic_addetz</marker>'s so far), it reminds me of the truly global nature of the <marker>#eBPF</marker> community and hence how much more awesome these speakers are to present a hard core tech topic in English so effortlessly. Kudos to them!`,
    time: '8:11 PM',
    date: 'Sep 28, 2022',
    url: 'https://twitter.com/skpodila/status/1575156286915649536',
  },
  {
    avatar: avatar2,
    name: 'Paul Chaignon',
    nick: '@pchaigno',
    text: `Coming to us from the Swiss mountains, <marker>@martyns</marker> demos pwru, an <marker>#eBPF</marker> tool to debug networking issues. Don't be surprised if you hear cow bells in the background 😅 Only at <marker>#eBPFSummit</marker>!`,
    time: '10:17 PM',
    date: 'Sep 28, 2022',
    url: 'https://twitter.com/pchaigno/status/1575187896218550272',
  },
  {
    avatar: avatar3,
    name: 'Michael Friedrich🌈',
    nick: '@dnsmichi',
    text: `I really dig the CTF exercises at <marker>@ebpfsummit</marker>🤗<br/><br/>Rare that it catches me so fast, chapeau <marker>@lizrice</marker> <marker>@mauilion</marker>🤩<br/><br/>Amazing to learn while being challenged. 💡`,
    time: '9:57 PM',
    date: 'Sep 29, 2022',
    url: 'https://twitter.com/dnsmichi/status/1575545403436433408',
  },
];

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => (
  <section
    className="relative overflow-hidden pt-40 pb-32 after:absolute after:top-0 after:left-0 after:-z-20 after:h-full after:w-full after:bg-gray-98 lg:pt-32 md:pt-20 md:pb-20"
    id="last-year-summit"
  >
    <Container>
      <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 lg:grid-cols-1">
        <div className="flex max-w-[546px] flex-col items-start">
          <Heading tag="h2" size="4xl" className="!font-bold">
            {title}
          </Heading>
          <p className="mt-6 text-left text-xl md:text-lg">{description}</p>
          <Link className="mt-7 text-lg" theme="underline" to={link.url}>
            {link.title}
          </Link>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src="https://www.youtube.com/embed/0YqF45Kaapo"
            frameBorder="0"
            width={592}
            height={333}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded YouTube"
            allowFullScreen
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-1/2 left-1/2 -z-10 h-[1015px] w-[1501px] max-w-none translate-y-[calc(-50%-13.5rem)] translate-x-[calc(-50%+3rem)] md:hidden"
          width={1501}
          height={1015}
          loading="lazy"
          src={hexagonBg}
          alt=""
          aria-hidden
        />
        <ul className="mx-auto mt-[8.5rem] grid max-w-[760px] grid-cols-4 place-items-center gap-x-10 gap-y-8 lg:mt-32 lg:max-w-[740px] lg:gap-x-[82px] md:mt-28 md:max-w-[400px] md:grid-cols-2 md:gap-x-8 sm:mt-24">
          {items.map(({ number, unit, textColor, numberColor }, index) => {
            const isTextBlack = textColor === 'black';
            const isNumberOrange = numberColor === 'orange';
            return (
              <li className="relative max-w-[160px] lg:min-w-[140px]" key={index}>
                <img
                  src={shapes[index]}
                  alt=""
                  width={160}
                  height={188}
                  loading="lazy"
                  aria-hidden
                />
                <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col space-y-0.5 text-center">
                  <span
                    className={`text-[64px] font-semibold leading-none lg:text-5xl md:text-6xl xs:text-5xl ${
                      isNumberOrange ? 'text-primary-orange' : 'text-white'
                    }`}
                  >
                    {number}
                  </span>
                  <span
                    className={`text-base font-medium leading-none ${
                      isTextBlack ? 'text-black' : 'text-white'
                    }`}
                  >
                    {unit}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-32 grid grid-cols-3 place-items-start gap-8 lg:mt-28 lg:grid-cols-1 md:mt-24 sm:mt-20">
        {twitterCards.map(({ avatar, name, nick, text, time, date, url }, index) => (
          <Link
            className="flex min-h-[230px] w-full flex-col justify-start rounded-lg border-[1.5px] border-gray-94 bg-white p-8 lg:p-7"
            key={index}
            to={url}
            target="_blank"
          >
            <div className="flex items-center space-x-3 self-start">
              <img className="h-11 w-11" src={avatar} alt={name} />
              <div className="flex flex-col">
                <span className="font-bold">{name}</span>
                <span className="mt-1 text-gray-50">{nick}</span>
              </div>
            </div>
            <p
              className="with-marker-blue mt-5 text-lg leading-normal"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="mt-4 flex space-x-5 self-start leading-normal text-gray-50">
              <time>{time}</time>
              <time className="relative before:absolute before:top-1/2 before:-left-3 before:block before:h-[3px] before:w-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-50">
                {date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);
LastYear.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      textColor: PropTypes.oneOf(['black', 'white']).isRequired,
      numberColor: PropTypes.oneOf(['white', 'orange']).isRequired,
    })
  ).isRequired,
};

export default LastYear;
