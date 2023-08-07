
export default function Section05() {
    return (
      <section>
        <div className="relative max-w-7xl mx-auto">
          {/* Bg */}
          <div
            className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
            aria-hidden="true"
          />
  
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section content */}
              <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
                {/* Section header */}
                <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                  <h2 className="h2 text-white mb-4">3. Earn $KLEO tokens!</h2>
                  <p className="text-lg text-blue-200 mb-8">
                    $KLEO tokens are currently live on testnet with limited utility, when moving to mainnet there will be a way to compensate our early users on testnet.
                  </p>
                </div>
  
                {/* Image */}
                <div className="flex justify-center mb-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="relative">
                    
                  </div>
                </div>
  
                {/* Items */}
                <div
                  className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* 1st item */}
                  <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">
                    <div className="mb-3">
                      <div className="flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">1</div>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-1">Access Exclusive Communities</h4>
                    <p className="text-blue-200">
                      We will regularly airdrop NFTs, which will allow access to exclusive communities. These NFTs will be deterministic of internet age.
                    </p>
                  </div>
  
                  {/* 2nd item */}
                  <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">
                    <div className="mb-3">
                      <div className="flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">2</div>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-1">Governance</h4>
                    <p className="text-blue-200">
                     $KLEO tokens will allow you to vote on organisation intent and misuse of user data issues. If found guilty, the claimant would be rewarded handsomely
                    </p>
                  </div>
  
                  {/* 3rd item */}
                  <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-blue-400 last:after:hidden">
                    <div className="mb-3">
                      <div className="flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">3</div>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-1">Earn</h4>
                    <p className="text-blue-200">
                      You can trade $KLEO tokens on an exchange, based on your geographical area and proof of humanity. 
                      <i><b>Not applicable in testnet.</b></i> 
                       
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }