import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(0);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (screen === 2) {
      setLoading(0);

      const interval = setInterval(() => {
        setLoading((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }

          return prev + 2;
        });
      }, 80);

      return () => clearInterval(interval);
    }
  }, [screen]);

  useEffect(() => {
    if (loading === 100 && screen === 2) {
      const timer = setTimeout(() => {
        setScreen(3);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [loading, screen]);

  return (
    <div className="app">

      {/* SCREEN 1 */}
      {screen === 0 && (
        <div className="screen fade-in">
          <div className="card intro-card">

            <div className="symbol">♡</div>

            <p className="label">BIRTHDAY PROTOCOL #01</p>

            <h1>
              SYSTEM
              <br />
              LOCKED
            </h1>

            <p className="subtext">
              Hello, Birthday Boy (MERSAL_BOY😀).
            </p>

            <p className="description">
              Someone has prepared something for you.
              <br />
              Access is restricted to one person.
            </p>

            <button onClick={() => setScreen(1)}>
              ENTER
            </button>

          </div>
        </div>
      )}


      {/* SCREEN 2 */}
      {screen === 1 && (
        <div className="screen fade-in">
          <div className="card">

            <div className="symbol">♡</div>

            <p className="label">A SMALL QUESTION</p>

            <h2>Before we continue...</h2>

            <p className="main-text">
              Is your mood okay to see
              <br />
              what's waiting for you?
            </p>

            <div className="button-group">

              <button onClick={() => setScreen(2)}>
                YES, I'M READY
              </button>

              <button
                className="secondary"
                onClick={() =>
                  alert("Take your time. I'll wait. ♡")
                }
              >
                NOT YET
              </button>

            </div>

          </div>
        </div>
      )}


      {/* SCREEN 3 - LOADING */}
      {screen === 2 && (
        <div className="screen fade-in">
          <div className="card loading-card">

            <div className="symbol">♡</div>

            <p className="label">ACCESS GRANTED</p>

            <h2>Preparing something special...</h2>

            <div className="progress-container">
              <div
                className="progress"
                style={{ width: `${loading}%` }}
              ></div>
            </div>

            <p className="loading-number">
              {loading}%
            </p>

            <div className="loading-lines">
              <p>✓ Opening memories</p>
              <p>✓ Preparing special messages</p>
              <p>✓ Arranging a few words</p>
              <p>✓ Birthday protocol activated</p>
            </div>

          </div>
        </div>
      )}


      {/* SCREEN 4 - PRIVATE MESSAGE */}
      {screen === 3 && (
        <div className="screen fade-in">
          <div className="card message-card">

            <p className="label">PRIVATE MESSAGE</p>

            <h1>
              FOR MAMA
            </h1>

            <p className="main-text">
              Then take your time.
            </p>

            <p className="description">
              "How I feel for you" nu na ippavariyum words la express pannale.I am bad at expressing love.Onnu nenaipe,ana innonu pannuve
              <br />
              Enaku proper aa express panna theriyale.Neenge eppadi receive pannuveenge nu theriyale.So ippo konjam dhaa express pandre.
              unga kitte irundu receiving skills nalla irundhaa aparama moththam express pandren😀.
              <br />
             
            </p>

            <button onClick={() => setScreen(4)}>
              READ IT
            </button>

          </div>
        </div>
      )}


      {/* SCREEN 5 - THINGS I WANT YOU TO KNOW */}
      {screen === 4 && (
        <div className="screen fade-in scroll-screen">
          <div className="content-card">

            <p className="label">
              THINGS I WANT YOU TO KNOW
            </p>

            <h1>A FEW WORDS</h1>

            <div className="thoughts">

              <div className="thought">
                <span>01</span>

                <p>
                  I appreciate having you in my life more than
                  I probably say out loud.
                </p>
              </div>


              <div className="thought">
                <span>02</span>

                <p>
                  I don't need everything to be perfect.
                  I just value the moments that feel real.
                </p>
              </div>


              <div className="thought">
                <span>03</span>

                <p>
                  You never have to give me more of your time
                  or attention than you can. But please remember
                  that I'll always be there for you. No matter
                  what, don't ever feel like you're alone.
                </p>
              </div>


             

            </div>

            <button onClick={() => setScreen(5)}>
              ONE LAST THING
            </button>

          </div>
        </div>
      )}


      {/* SCREEN 6 - BIRTHDAY LETTER */}
      {screen === 5 && (
        <div className="screen fade-in scroll-screen">
          <div className="letter-card">

            <p className="label">BIRTHDAY MESSAGE</p>

            <h1>
              HAPPY BIRTHDAY,
              <br />
              MAMA❤️.
            </h1>

            <div className="letter">

              <p>
                I wanted to do something a little different
                this time.
              </p>

              <p>
                So I used the one thing I know how to do —
                coding — and turned it into a small surprise
                for you. This website isn't really about the code.
                The code is just the way I chose to put
                these words together.What matters is that I wanted to make something
                that took time, thought and effort.
              </p>

              

             

              <p>enaku unga date Of Birth chinna vayasule irunde theriyum.Theriyadu nu nadichadu ku sorry mama.
                Therinje sollame irundaku thimiru nu nenaikadinge..adhuku laa neraiya reason iruku.Ana naa rombaa feel panne sollame irundaduku.
                adhukaga dhaa edo ennala mudinjaa indha chinna website..Normal msg lee idhu naa panni irundrikalam ana neenge enne solluvinge..."naanum ipdi tha panne... ippo devil ayiten nu"
                en ego hurt aagum😂..adhu nala dhaa coding le message pandren...ungalku puriyum nu website aa change panne..Ippo sollunge neenge coding le laa msg panningalaa?🧐
                
              </p>

              <p>
                And I hope you know that somewhere in all
                those ordinary days, there is someone who
                genuinely wishes good things for you.
              </p>

              <p className="signature">
                Happy Birthday once again. ♡
              </p>

            </div>

            <button onClick={() => setScreen(6)}>
              THERE'S MORE
            </button>

          </div>
        </div>
      )}


      {/* SCREEN 7 - FINAL MESSAGE */}
      {screen === 6 && (
        <div className="screen fade-in">
          <div className="card final-card">

            <div className="final-heart">
              ♡
            </div>

            <p className="label">
              FINAL MESSAGE
            </p>

            <h1>
              IF YOU REMEMBER
              <br />
              ONE THING...
            </h1>

            <p className="main-text">
              Ungalayum love pannuvange(including me)
            </p>

            <p className="description">
              oru pechu varthaile, "enne laa yaar aththe love pannuva" nu sonninge
              
              <br />
              But na unge mela romba paithiyama irunde..sonna romba desperate aa irukareno nu neenge nenaipinge nu ippo variyum sollale ana
              ungalku theriyum nu nenaikiren.
              <br/>
              <br/>
               
               ungale rombaa varushama nenaichitu irunden.
            </p>

            <div className="line"></div>

            <p className="final-message">
              Happy Birthday, Mama❤️.
              <br />
              I hope this year is kind to you.
            </p>

            <button onClick={() => setScreen(7)}>
              FINISH
            </button>

          </div>
        </div>
      )}


      {/* SCREEN 8 - END */}
      {screen === 7 && (
        <div className="screen fade-in">
          <div className="card end-card">

            <div className="symbol">
              ♡
            </div>

            <p className="label">
              BIRTHDAY PROTOCOL
            </p>

            <h1>
              COMPLETE.
            </h1>

            <p className="main-text">
              Made with code.
              <br />
              Made with time.
              <br />
              Made especially for you.
            </p>

            <p className="small">
              — from someone who wanted your birthday
              to have something a little different.
            </p>

            <div className="footer-line">
              SYSTEM OFFLINE
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;