'use client';

import { motion } from 'framer-motion';
import {
    FileSearch,
    Layout,
    Code2,
    BrainCircuit,
    Cloud,
    CheckCircle2
} from 'lucide-react';

import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const workflowSteps = [
    {
        icon: FileSearch,
        title: 'Discovery & Planning',
        description: 'Defining business goals, analyzing requirements, and establishing a detailed implementation roadmap.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10'
    },
    {
        icon: Layout,
        title: 'Architecture Design',
        description: 'Building scalable system architectures, selecting the optimal tech stack, and designing robust databases.',
        color: 'text-indigo-500',
        bg: 'bg-indigo-500/10'
    },
    {
        icon: Code2,
        title: 'Development & Leadership',
        description: 'Leading teams through clean code practices, backend optimization, and ensuring quality via rigorous code reviews.',
        color: 'text-sky-500',
        bg: 'bg-sky-500/10'
    },
    {
        icon: BrainCircuit,
        title: 'AI Integration',
        description: 'Developing deep learning models and integrating RAG/LLMs into production-ready enterprise systems.',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        icon: Cloud,
        title: 'Testing & Deployment',
        description: 'Automating CI/CD pipelines, containerizing with Docker, and deploying to secure cloud infrastructures.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10'
    }
];

const WorkflowSection = () => {
    return (
        <Container className="bg-gray-100/30">
            <div className="flex flex-col items-center gap-4 mb-16">
                <Tag label="Workflow" />
                <Typography variant="h2" className="text-center font-bold">
                    Technical Leadership Lifecycle
                </Typography>
                <Typography variant="subtitle" className="max-w-xl text-center opacity-80">
                    A professional end-to-end process from initial concept to production-grade system operation.
                </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {workflowSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className={`mb-6 p-5 rounded-2xl ${step.bg} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                            <step.icon className={`w-8 h-8 ${step.color}`} />
                        </div>

                        <Typography variant="subtitle" className="font-bold mb-2">
                            {step.title}
                        </Typography>

                        <Typography className="text-sm leading-relaxed opacity-70">
                            {step.description}
                        </Typography>

                        {index < workflowSteps.length - 1 && (
                            <div className="hidden md:block absolute right-[-15%] top-1/4 translate-y-1/2 opacity-20 transform scale-x-150">
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <CheckCircle2 className="w-6 h-6 text-gray-400" />
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default WorkflowSection;
