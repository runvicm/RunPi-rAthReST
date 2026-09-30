import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 border-t border-base-300 text-base-content p-10 max-w-6xl mx-auto">
      <aside>
        <span className="text-lg font-extrabold">
          Custom<span className="text-primary">CP</span>
        </span>
        <p className="text-base-content/60 max-w-xs">
          A Ragnarok Online server control panel, built on a Laravel API.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Server</h6>
        <a href="#home" className="link link-hover">
          News
        </a>
        <a href="#server" className="link link-hover">
          Server info
        </a>
        <a href="#rules" className="link link-hover">
          Rules
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Community</h6>
        <a href="#ladder" className="link link-hover">
          Ladder
        </a>
        <a href="#market" className="link link-hover">
          Market
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Account</h6>
        <a href="#login" className="link link-hover">
          Log in
        </a>
        <a href="#register" className="link link-hover">
          Register
        </a>
      </nav>
      <p className="text-xs text-base-content/40">
        Powered by <span className="text-primary">rAthReST</span>
      </p>
    </footer>
  );
}
