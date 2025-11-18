import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!client) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please set OPENAI_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { model, input, messages } = body;

    if (!input && (!messages || messages.length === 0)) {
      return NextResponse.json(
        { error: 'Input or messages is required' },
        { status: 400 }
      );
    }

    // Determine which model to use
    let selectedModel = model;
    if (model === 'auto') {
      // Auto-select based on input length or complexity
      const inputText = input || messages[messages.length - 1]?.content || '';
      if (inputText.length > 2000) {
        selectedModel = 'gpt-4-turbo-preview';
      } else {
        selectedModel = 'gpt-3.5-turbo';
      }
    }

    // Use chat.completions API (standard OpenAI API)
    const inputText = input || messages[messages.length - 1]?.content || '';
    
    // Build messages array - if we have previous messages, use them, otherwise create a new conversation
    const conversationMessages = messages && messages.length > 0 
      ? messages 
      : [{ role: 'user' as const, content: inputText }];

    const response = await client.chat.completions.create({
      model: selectedModel,
      messages: conversationMessages,
    });

    const output = response.choices[0]?.message?.content || '';

    return NextResponse.json({
      output: output,
      model: selectedModel,
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request', 
        details: error.message || 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

