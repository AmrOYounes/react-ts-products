import {
  Dialog,
  DialogPanel,
  Transition,
  DialogTitle,
  TransitionChild,
  DialogBackdrop,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
  discription?: string;
}

const Modal = ({
  isOpen,
  closeModal,
  title,
  children,
  discription,
}: IProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <DialogBackdrop className="fixed inset-0  backdrop-blur-sm" />
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </DialogTitle>
                  )}

                  {discription && (
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum asperiores earum, aspernatur rem possimus est
                      laboriosam praesentium ad aliquam numquam inventore
                      voluptatem, eaque voluptatum vero deserunt nam dolore
                      ullam nostrum!
                    </p>
                  )}

                  <div className="mt-4">{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
