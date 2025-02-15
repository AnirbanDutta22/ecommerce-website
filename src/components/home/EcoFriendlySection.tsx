// components/EcoFriendlySection.tsx
export const EcoFriendlySection = () => {
  const features = [
    {
      title: "Petroleum Free",
      content: "Excepteur s’int occasect cupidatet non proident",
    },
    {
      title: "Cruelty Free",
      content: "Excepteur s’int occasect cupidatet non proident",
    },
    {
      title: "Phthalate Free",
      content: "Excepteur s’int occasect cupidatet non proident",
    },
    {
      title: "100% Vegan",
      content: "Excepteur s’int occasect cupidatet non proident",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 tracking-tight">
          Eco-Friendly & Natural Ingredients
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-8">
              <h3 className="text-xl font-semibold mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.content}</p>
            </div>
          ))}
        </div>

        <hr className="my-12 border-t-2 border-gray-200 w-24 mx-auto" />

        <div className="text-center text-gray-600 space-y-1 mt-12">
          <p className="text-sm font-medium">Carbillé LLC</p>
          <p className="text-xs">All Technologies Limited</p>
        </div>
      </div>
    </section>
  );
};
