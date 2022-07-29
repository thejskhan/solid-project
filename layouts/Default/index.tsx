//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'
import Navbar from "@/composites/Navbar";

//import COMPONENT from '@/components'

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div className="relative w-full px-4 flex flex-col items-center min-h-screen dark:bg-slate-900 bg-slate-50">
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
