import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Proposal = ({ title, date1, date2, buttonText, buttonUrl }) => (
  <section className="mt-32 mb-16 lg:mt-20">
    <Container>
      <div className="relative flex items-center justify-center gap-x-[58px] overflow-hidden rounded-lg bg-gray-98 p-8 xl:gap-x-12 md:flex-col">
        <div className="absolute right-0 h-full w-[220px] md:-right-4 md:hidden">
          <StaticImage src="./images/back-illustration.png" alt="" loading="eager" aria-hidden />
        </div>
        <div className="absolute left-0 h-full w-[220px] rotate-180 md:-right-4 md:hidden">
          <StaticImage src="./images/back-illustration.png" alt="" loading="eager" aria-hidden />
        </div>
        <div className="relative flex flex-col gap-y-3 lg:gap-y-2 md:mb-5 md:text-center">
          <Heading tag="h2" size="2xl" className="!font-medium">
            {title}
          </Heading>
          <div className="flex flex-wrap gap-x-7 lg:gap-x-5">
            <time
              className="text-lg leading-normal text-black/70"
              dangerouslySetInnerHTML={{ __html: date1 }}
            />
            <time
              className="text-lg leading-normal text-black/70"
              dangerouslySetInnerHTML={{ __html: date2 }}
            />
          </div>
        </div>
        <Button
          className="relative flex gap-x-2.5 rounded-lg text-base font-extrabold"
          type="button"
          size="sm"
          theme="black-filled"
          to={buttonUrl}
        >
          {buttonText}
        </Button>
      </div>
    </Container>
  </section>
);

Proposal.propTypes = {
  title: PropTypes.string.isRequired,
  date1: PropTypes.string.isRequired,
  date2: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Proposal;
