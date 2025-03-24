import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Detail  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Unleashing Web Design Secrets: Crafting Digital Masterpieces
          </h1>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">Abhinav Rusia</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="font-medium text-gray-600">
            This blog is your gateway to discovering the hidden techniques and
            creative sparks that turn simple layouts into stunning digital works
            of art. From mastering aesthetics to perfecting functionality, we’ll
            explore how to craft websites that captivate and inspire. Ready to
            unleash your inner design genius? Let’s get started!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src="https://ik.imagekit.io/devabhi/generated.jpg?updatedAt=1742703883239"
            className="rounded-2xl object-cover w-full h-72"
            w="600"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text  */}
        <div className="lg:text-lg flex flex-col gap-8 text-justify">
          <p className="">
            {`In the ever-evolving landscape of the digital age, web design stands
            as both an art and a science—a delicate dance between creativity and
            precision. Websites are no longer just static pages; they are
            living, breathing canvases that tell stories, evoke emotions, and
            connect people across the globe. "Unleashing Web Design Secrets:
            Crafting Digital Masterpieces" is your invitation to peel back the
            layers of this fascinating craft and discover how to transform
            pixels into breathtaking experiences. Whether you're sketching your
            first wireframe or refining your hundredth project, these secrets
            will elevate your skills and inspire you to create designs that
            resonate.`}
          </p>

          <h1 className="text-2xl font-semibold">
            The Foundation: Understanding the User’s Soul
          </h1>
          <p>
            Great web design begins with empathy. Before a single line of code
            is written or a color palette chosen, the best designers step into
            the shoes of their audience. Who are they? What do they seek? A
            seamless shopping experience? A moment of inspiration? By mapping
            out user journeys and anticipating needs, you lay the groundwork for
            a masterpiece. Tools like personas and wireframes aren’t just
            technical steps—they’re brushes that sketch the outline of a design
            tailored to the human experience. This secret isn’t about flashy
            trends; it’s about building a bridge between intention and
            interaction.
          </p>

          <h1 className="text-2xl font-semibold">
            The Palette: Colors That Speak
          </h1>
          <Image
            className={"rounded-2xl object-cover"}
            src="https://ik.imagekit.io/devabhi/colors.jpg?updatedAt=1742705862823"
            w="600"
          />
          <p>
            Color is the heartbeat of a digital masterpiece. It’s not just about
            beauty—it’s about psychology. A splash of fiery red can ignite
            urgency, while a wash of cool blue whispers trust and calm. The
            secret lies in harmony: choosing a palette that aligns with your
            brand’s voice and the emotions you want to stir. Pair this with the
            golden rule of contrast—ensuring text pops against backgrounds—and
            you’ve unlocked a visual language that guides users effortlessly.
            Experiment with gradients or bold monochromes, but always let
            purpose lead the brushstroke.
          </p>

          <h1 className="text-2xl font-semibold">
            The Structure: Crafting with Code and Creativity
          </h1>
          <p>
            Beneath every stunning design lies a skeleton of code—HTML, CSS, and
            JavaScript weaving together form and function. The secret here is
            balance: let creativity flow, but anchor it with clean, responsive
            frameworks. A masterpiece adapts gracefully to every screen size,
            from sprawling desktops to tiny phones. Flexbox and Grid are your
            sculptor’s tools, chiseling layouts that flex and breathe. Add a
            sprinkle of animation—subtle hovers or smooth transitions—and your
            design begins to dance, captivating without overwhelming.
          </p>

          <h1 className="text-2xl font-semibold">
            The Details: Typography as Artistry
          </h1>
          <Image
            className={"rounded-2xl object-cover"}
            src="https://ik.imagekit.io/devabhi/typography.jpg?updatedAt=1742705862775"
            w="600"
          />
          <p>
            If color is the heartbeat, typography is the voice. The secret to
            mastering it? Choose fonts that sing in unison with your design’s
            soul—sleek sans-serifs for modernity, elegant serifs for
            timelessness. But don’t stop there: play with hierarchy. Bold
            headlines command attention, while airy spacing invites the eye to
            linger. Pair this with readability—optimal line lengths and font
            sizes—and your text becomes a seamless part of the masterpiece, not
            a distraction from it.
          </p>

          <h1 className="text-2xl font-semibold">
            The Magic: Interaction and Intuition
          </h1>
          <p>
            A digital masterpiece isn’t static—it lives through interaction. The
            secret lies in intuitive navigation: buttons that beg to be clicked,
            menus that unfold like petals, and feedback that feels alive.
            Micro-interactions—like a glowing button on hover or a playful
            loading animation—turn functionality into delight. Test your design
            with real users, tweak the flow, and watch as usability transforms
            into enchantment. This is where technology and artistry collide,
            sparking moments of wonder.
          </p>

          <h1 className="text-2xl font-semibold">
            The Final Stroke: Your Signature
          </h1>
          <p>
            {`Every designer leaves a mark—a unique fusion of vision and skill.
          "Unleashing Web Design Secrets: Crafting Digital Masterpieces" isn’t
          about following a rigid blueprint; it’s about finding your voice in
          the vast digital canvas. Experiment fearlessly, refine relentlessly,
          and let your designs reflect the beauty of your imagination. The web
          is waiting for your next creation—so pick up your tools, unleash your
          secrets, and craft something extraordinary. Ready to turn inspiration
          into action? Start small, dream big, and let your digital masterpieces
          light up the world.`}
          </p>
        <div className="h-10"></div>
        </div>

        {/* Menu */}

        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://ik.imagekit.io/devabhi/userImg.jpeg?updatedAt=1742526722468"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link className="text-blue-800">Abhinav Rusia</Link>
          </div>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>

          <div className="flex gap-2">
            <Link>
              <Image src="https://ik.imagekit.io/devabhi/instagram.svg?updatedAt=1742526722118" />
            </Link>
            <Link>
              <Image src="https://ik.imagekit.io/devabhi/facebook.svg?updatedAt=1742526718012" />
            </Link>
            </div>
          </div>

          <PostMenuAction />

          <h1 className="mt-6 mb-2 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Database
            </Link>
            <Link to="/" className="underline">
              DevOps
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-6 mb-2 text-sm font-medium">Search</h1>
          <Search />
          
        </div>
      </div>
      <Comments/>
    </div>
  );
};
export default SinglePostPage;
