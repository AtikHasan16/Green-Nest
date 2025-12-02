import React from "react";
import Container from "./Container";

const PlantCareTips = () => {
  return (
    <div>
      {/* The main hero section is now static and uses a solid color background. */}

      {/* PLANT CARE TIPS SECTION */}
      <Container>
        <section className=" py-5 poppins">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bebas text-center mb-12 text-green-800">
              Essential Care Tips for Shade Lovers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1. Watering Tip */}
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 border-t-4 border-green-800">
                <h3 className="text-2xl font-bold text-gray-800">
                  💧 Watering: The Finger Test
                </h3>
                <p className="text-gray-600">
                  The most common cause of plant death is overwatering. Always
                  use the **"Finger Test"**: stick your finger **2 inches** into
                  the soil. If it feels dry, it's time to water thoroughly until
                  it drains from the bottom. If it's still moist, check again in
                  a day or two. For shade plants, let them dry slightly, but
                  never completely bone-dry.
                </p>
              </div>

              {/* 2. Sunlight Tip */}
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 border-t-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-gray-800">
                  ☀️ Sunlight: Bright, Indirect is Best
                </h3>
                <p className="text-gray-600">
                  "Shade" does not mean darkness. Most shade-loving plants
                  thrive in **bright, indirect light**— think a spot near an
                  east-facing window or a few feet away from a south/west
                  window. **Never expose tender leaves to direct, harsh
                  afternoon sun**, as this will quickly scorch and burn them.
                </p>
              </div>

              {/* 3. Fertilizing Tip */}
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 border-t-4 border-red-500">
                <h3 className="text-2xl font-bold text-gray-800">
                  🍎 Fertilizing: Less is More
                </h3>
                <p className="text-gray-600">
                  Shade plants grow slower than sun-lovers and require less
                  food. Fertilize only during the **active growing season**
                  (spring and summer). Use a balanced, liquid houseplant
                  fertilizer at **half-strength** once per month. Skip feeding
                  entirely in the fall and winter when growth slows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      {/* END OF PLANT CARE TIPS SECTION */}
    </div>
  );
};

export default PlantCareTips;
