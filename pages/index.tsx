import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "./../components/layout/Layout";
import c from "../styles/index.module.scss";
import Generator from "../components/generator/Generator";

const Home: NextPageWithLayout = () => {
  return (
    <main className={c.home}>
      <div className={c.container}>
        <span className={c.disclaimer}>
          Our readers help us create quality content. If you purchase via links
          on our site, we may receive affiliate commissions.{" "}
          <a href="" target="_blank">
            <span className={c.learn_more}>Learn more</span>
          </a>
        </span>
        <div className={c.generatorContainer}>
          <h1>Generate strong passwords</h1>
          <span>Upgrade the security of your online accounts.</span>
          <span>
            Create strong passwords that are completely random and impossible to
            guess.
          </span>
          <Generator />
        </div>
        <div className={c.qa}>
          <section>
            <div className={`${c.imageContainer} ${c.mobileSpacingBottom}`}>
              <Image src="/index/computer.png" alt="protection" fill  />
            </div>
            <div className={c.text}>
              <h2>What is a password generator?</h2>
              <p>
                A password generator is a tool that automatically generates
                strong, secure passwords. With its help, you don’t need to come
                up with your own passwords ever again.
              </p>
              <p>
                A single mouse click will generate you a sequence of random
                symbols. Copy and use it as a password for your device, email,
                social media account, or anything else that requires restricted
                access.
              </p>
              <p>
                Also, don’t use the same password for more than one account.
                Each time you need to sign up, create a new password using this
                free password generator. In this way, your data will be safer
                than ever before.
              </p>
            </div>
          </section>
          <section className={c.reverse}>
            <div className={`${c.imageContainer} ${c.mobileSpacingTop}`}>
              <Image src="/index/speedometer.png" alt="speed-o-meter" fill />
            </div>
            <div className={c.text}>
              <h2>How does our password generator tool work?</h2>
              <p>
                To create a truly unique character combination, this online
                password generator tool goes through random sequences of 26
                uppercase letters, 26 lowercase letters, 10 numeric digits, and
                32 special symbols. The result is a unique 12-character
                sequence. This number of characters makes your future password
                downright unbreakable, taking 1.4 billion years for a
                brute-force attack to crack it.
              </p>
              <p>
                This free password generator is compatible with Windows, Linux,
                and Mac operating systems, as well as with Android and iOS
                devices.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
