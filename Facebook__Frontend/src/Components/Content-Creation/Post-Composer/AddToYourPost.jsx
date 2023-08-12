import React from 'react';

//import higher order component
import MegWrapper from '../../HOCs/MegWrapperHOC ';

//import components
import { PostCreationLinks, SectionHeader } from '../module';

//import useglobal context
import { useGlobalContext } from '../../../Hooks/context/UseContext';

const AddToYourPost = () => {
  const { setCreatePostState, addToYourState, setAddToYourState, setGoBack } =
    useGlobalContext();
  return (
    <section
      className={
        ' z-20  w-full h-full rounded-lg dark:border dark:border-bd500 ' +
        (addToYourState && 'translate_x')
      }
    >
      <SectionHeader
        title={`Add to your post`}
        setFirstState={setCreatePostState}
        setSecondState={setAddToYourState}
        setThirdState={setGoBack}
      />
      <PostCreationLinks home={false} />
    </section>
  );
};

export default MegWrapper(AddToYourPost);
