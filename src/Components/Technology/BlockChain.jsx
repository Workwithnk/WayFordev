import React from "react";
import { NavLink } from "react-router-dom";

function BlockChain() {
  React.useEffect(() => {
    document.title = "WayForDev | Blockchain";
  }, []);
  return (
    <div className="BackToTop">
      <div className="comman_Header BackToTop">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>Blockchain Developer</h1>
        <NavLink className="comman_NextLink" to="/allWays">
          Next
        </NavLink>
      </div>
      <h1
        style={{
          color: "#34495e",
          textDecoration: "underline",
          margin: "16px",
          fontFamily: "Montserrat",
          fontSize: "21px",
        }}
      >
        Tools and Technique
      </h1>
      <div className="details_Comman">
        <ul>
          <li>
            <a href="https://docs.soliditylang.org/en/v0.8.9/">Solidity</a>
            <p>
              Solidity is an object-oriented, high-level language for
              implementing smart contracts. Smart contracts are programs which
              govern the behaviour of accounts within the Ethereum state.
            </p>
          </li>
          <li>
            <a href="https://geth.ethereum.org/">Geth</a>
            <p>
              Geth(Go Ethereum) is a command line interface for running Ethereum
              node implemented in Go Language. Using Geth you can join Ethereum
              network, transfer ether between accounts or even mine ethers.
            </p>
          </li>

          <li>
            <a href="https://medium.com/blockchainexpert-blog/mist-building-blockchain-6d6466c2c52a">
              Mist
            </a>
            <p>
              Mist is an Electron framework based application which is used for
              the management of Ethereum wallet and Ethereum applications.
            </p>
          </li>
          <li>
            <a href="https://docs.soliditylang.org/en/v0.4.21/installing-solidity.html">
              Solc
            </a>
            <p>
              solc converts from a high-level solidity language into Ethereum
              Virtual Machine (EVM) bytecode so that it can be executed on the
              blockchain by EVM.
            </p>
          </li>
          <li>
            <a href="https://remix.ethereum.org/">Remix</a>
            <p>
              Remix is a Solidity IDE that's used to write, compile and debug
              Solidity code. ... IDE stands for Integrated Development
              Environment and is an application with a set of tools designed to
              help programmers execute different tasks related to software
              development such as writing, compiling, executing and debugging
              code
            </p>
          </li>
          <li>
            <a href="https://www.vanimpe.eu/2017/12/04/stealing-cryptocurrency-wallet-or-metasploit/">
              Metamask
            </a>
            <p>
              Metasploit provides you with exploits, payloads, auxiliary
              functions, encoders, listeners, shellcode, post-exploitation code
              and nops. You can obtain a Metasploit Pro Specialist Certification
              online to become a credentialed pen-tester.
            </p>
          </li>
          <li>
            <a href="https://www.kaleido.io/blockchain-platform/truffle#:~:text=Truffle%20is%20a%20world%2Dclass,over%201.5%20million%20lifetime%20downloads.">
              Truffle
            </a>
            <p>
              Truffle is a world-class development environment, testing
              framework and asset pipeline for blockchains using the Ethereum
              Virtual Machine (EVM), aiming to make life as a developer easier.
            </p>
          </li>
          <li>
            <a href="https://www.trufflesuite.com/docs/ganache/overview#:~:text=Ganache%20is%20a%20personal%20blockchain,flavors%3A%20a%20UI%20and%20CLI.">
              Ganache
            </a>
            <p>
              Ganache is a personal blockchain for rapid Ethereum and Corda
              distributed application development
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BlockChain;
