import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
} from 'kopperstone-ui';

type ConsultationValues = {
  zipCode: string;
};

export const Default = () => {
  const form = useForm<ConsultationValues>({
    defaultValues: { zipCode: '' },
  });

  return (
    <Form {...form}>
      <form style={{ maxWidth: 320 }}>
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project ZIP Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your ZIP code" {...field} />
              </FormControl>
              <FormDescription>
                We use this to match you with your nearest Kopperstone showroom.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export const WithError = () => {
  const form = useForm<ConsultationValues>({
    defaultValues: { zipCode: '00' },
  });

  React.useEffect(() => {
    form.setError('zipCode', {
      type: 'manual',
      message: 'Please enter a valid 5-digit ZIP code.',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form {...form}>
      <form style={{ maxWidth: 320 }}>
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project ZIP Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your ZIP code" {...field} />
              </FormControl>
              <FormDescription>
                We use this to match you with your nearest Kopperstone showroom.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

type ConsultationRequestValues = {
  fullName: string;
  consultationDate: string;
};

export const ConsultationRequest = () => {
  const form = useForm<ConsultationRequestValues>({
    defaultValues: { fullName: 'Sarah Whitfield', consultationDate: '' },
  });

  return (
    <Form {...form}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 320 }}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Sarah Whitfield" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consultationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Consultation Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>
                Our design team typically confirms within one business day.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
