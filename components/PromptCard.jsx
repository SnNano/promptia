'use client'
import { useState } from "react";
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const [copied, setCopied] = useState('');
    const { data: session } = useSession();
    const pathName = usePathname();

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => { setCopied('') }, 3000)
    }

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image src={post.creator.image}
                        alt="user pic"
                        width={40}
                        height={40}
                        className="object-contain rounded-full"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
                        <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
                    </div>
                </div>
                <div
                    onClick={handleCopy}
                    className="copy_btn">
                    <Image
                        src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
                        width={12}
                        height={12} />
                </div>
            </div>
            <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
            <p
                onClick={() => handleTagClick && handleTagClick(post.tag)}
                className="font-inter cursor-pointer text-sm blue_gradient">{post.tag}</p>

            {session?.user.id === post.creator._id && pathName === '/profile' && (
                <div className="flex-center mt-5 gap-4 bprder-t border-gray-400 pt-3">
                    <p className="font-inter cursor-pointer text-sm green_gradient" onClick={handleEdit}>Edit</p>
                    <p className="font-inter cursor-pointer text-sm orange_gradient" onClick={handleDelete}>Delete</p>
                </div>
            )}
        </div>
    )
}

export default PromptCard