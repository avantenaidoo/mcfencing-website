// components/FenceReasons.tsx

export default function FenceReasons() {
  const reasons = [
    {
      title: "SAFETY",
      description:
        "Safety is one of the most popular reasons for fencing. Young children and pets can be kept close and provide boundaries that prevent them from running off, injuring themselves, or getting lost. Pools are also required by law to have fencing; self-closing devices create a secure perimeter and can also provide privacy.",
    },
    {
      title: "SECURITY",
      description:
        "A fence creates a physical and visual barrier that can help prevent strangers from easily entering a property. Whether it’s teens taking a shortcut through the yard or an animal looking for dinner from a garden, a fence is a great way to ward off any uninvited guests.",
    },
    {
      title: "PRIVACY",
      description:
        "A fence can provide privacy, along with peace of mind-- letting residents relax and enjoy their outdoor space without fear. Planting trees or shrubs along the fence is a great way to get additional privacy.",
    },
    {
      title: "NEIGHBOUR BOUNDARIES",
      description:
        "A fence draws a clear boundary between property lines, letting neighbours know where their own yard habits need to stop. In some cases, fence can be used to curb trespassing weeds or other plant life growing over from the neighbouring yard.",
    },
    {
      title: "SHIELD FOR UNATTRACTIVE SIGHTS",
      description:
        "Sometimes a homeowner just doesn’t want to see the empty lot, overflowing dumpster, or neighbour’s odd sculpture garden every day. Concealing these unattractive sights from the property can be accomplished by installing a privacy fence according to your needs.",
    },
    {
      title: "STORAGE/PARKING",
      description:
        "Fence is a popular choice for extra security when it comes to off-season storage. Products like double drive gates and removable panels (slats in the fence that can be lifted up and out) make it easy to get a boat or truck in and out of your yard.",
    },
    {
      title: "DECORATIVE",
      description:
        "Not every fence acts as a shield or barrier; some simply look lovely. Even if your fence was chosen for purely functional reasons, there are many ways to customise the style and look. Picture a lattice backdrop for a garden, or a large fence draped in vines beside the patio. Fences create a strong first impression.",
    },
  ];

  return (
    <section className="p-6 bg-black text-white mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold mb-4">Safety, security, style....</h2>
      <p className="mb-6 text-left text-lg max-w-3xl mx-auto">
        There are many reasons for installing a fence. Knowing your specific
        end-goal will help you to better plan and execute your project.
      </p>
      <h3 className="text-2xl font-semibold mb-6">
        Top reasons why people choose to install a fence:
      </h3>

      <div className="grid gap-8 md:grid-cols-2">
        {reasons.map(({ title, description }) => (
          <div key={title} className="space-y-2">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 font-semibold text-lg">
        We invite you to call MC Fencing today for all your fencing needs!
      </p>
    </section>
  );
}