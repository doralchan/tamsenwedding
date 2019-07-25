function Home() {
  return (
    <div>
      <div className='home'>
        <h1>Dora & Derek</h1>
      </div>
      <style jsx>{`
          .home {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
          }
        `}
      </style>
      <style jsx global>{`
          body {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}

export default Home
